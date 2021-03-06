<?php

namespace Model;

use Entity;
use Kdyby;
use Nette;

/**
 * Class Settings
 * @package Model
 */
class Settings extends Nette\Object {

	/** @var \Kdyby\Doctrine\EntityDao */
	private $dao;

	/**
	 * @param Kdyby\Doctrine\EntityDao $dao
	 */
	public function __construct(Kdyby\Doctrine\EntityDao $dao) {
		$this->dao = $dao;
	}

	/**
	 * @param Nette\Utils\ArrayHash $vals
	 *
	 * @Secure\Create(allow="admin")
	 * @Secure\Update(allow="admin")
	 */
	public function save(Nette\Utils\ArrayHash $vals) {
		foreach ($vals as $key => $value) {
			if ($entity = $this->findOneBy(['key' => $key])) {
				if ($entity->value != $value) {
					$entity->value = $value;
					$this->dao->add($entity);
				}
			} else {
				$entity = new Entity\Setting;
				$entity->key = $key;
				$entity->value = $value;
				$this->dao->add($entity);
			}
		}
		$em = $this->dao->getEntityManager();
		$em->flush();
	}

	/**
	 * @param array $criteria
	 * @param array $orderBy
	 * @param null $limit
	 * @param null $offset
	 * @return array
	 */
	public function findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null) {
		return $this->dao->findBy($criteria, $orderBy, $limit, $offset);
	}

	/**
	 * @param array $criteria
	 * @param array $orderBy
	 * @return mixed|null|object
	 *
	 * @Secure\Read(allow="guest")
	 */
	public function findOneBy(array $criteria, array $orderBy = null) {
		return $this->dao->findOneBy($criteria, $orderBy);
	}

	/**
	 * @param array $keys
	 * @return array
	 *
	 * @Secure\Read(allow="guest")
	 */
	public function findByKeys(array $keys) {
		$keys = $this->dao->findBy(['key' => $keys]);
		$result = [];
		foreach ($keys as $key) {
			$result[$key->key] = is_numeric($key->value) ? (float)$key->value : $key->value;
		}
		return $result;
	}

	/**
	 * @return Nette\Utils\ArrayHash
	 *
	 * @Secure\Read(allow="guest")
	 */
	public function findAllByKeys() {
		$keys = $this->dao->findBy([]);
		$result = [];
		foreach ($keys as $key) {
			$result[$key->key] = is_numeric($key->value) ? (float)$key->value : $key->value;
		}
		return Nette\Utils\ArrayHash::from($result);
	}

	/**
	 * @param $key
	 * @return int|null|string
	 *
	 * @Secure\Read(allow="guest")
	 */
	public function findOneByKey($key) {
		$result = $this->dao->findOneBy(['key' => $key]);
		if ($result) {
			$result = $result->value;
			return is_numeric($result) ? $result + 0 : $result; // int | double | string
		} else {
			return NULL;
		}
	}

}
