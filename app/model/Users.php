<?php

namespace Model;

use Kdyby;
use Nette;

/**
 * Class Users
 * @package Model
 */
class Users extends Nette\Object {

	/** @var \Kdyby\Doctrine\EntityDao */
	private $dao;

	/**
	 * @param Kdyby\Doctrine\EntityDao $dao
	 */
	public function __construct(Kdyby\Doctrine\EntityDao $dao) {
		$this->dao = $dao;
	}

	/**
	 * @param null $entity
	 * @param null $relations
	 * @return array
	 *
	 * @Secure\Create(allow="admin")
	 * @Secure\Update(allow="admin")
	 */
	public function save($entity = NULL, $relations = NULL) {
		return $this->dao->save($entity, $relations);
	}

	/**
	 * @param array $criteria
	 * @param array $orderBy
	 * @param null $limit
	 * @param null $offset
	 * @return array
	 *
	 * @Secure\Read(allow="guest")
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
	 * @param array $criteria
	 * @return mixed
	 *
	 * @Secure\Read(allow="guest")
	 */
	public function countBy(array $criteria = []) {
		return $this->dao->countBy($criteria);
	}

	/**
	 * @param $entity
	 * @param null $relations
	 * @param bool $flush
	 *
	 * @Secure\Delete(allow="admin")
	 */
	public function delete($entity, $relations = NULL, $flush = Kdyby\Persistence\ObjectDao::FLUSH) {
		$this->dao->delete($entity, $relations, $flush);
	}

}
