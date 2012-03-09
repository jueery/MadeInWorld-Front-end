<?php
/**
 * @category    Fishpig
 * @package     Fishpig_Wordpress
 * @license     http://fishpig.co.uk/license.txt
 * @author      Ben Tideswell <help@fishpig.co.uk>
 */

class Fishpig_Wordpress_Model_Mysql4_Postmeta extends Fishpig_Wordpress_Model_Mysql4_Post_Abstract
{
	public function _construct()
	{
		$this->_init('wordpress/postmeta', 'meta_id');
	}
}
