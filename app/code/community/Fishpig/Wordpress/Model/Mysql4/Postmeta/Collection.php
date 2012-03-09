<?php
/**
 * @category    Fishpig
 * @package     Fishpig_Wordpress
 * @license     http://fishpig.co.uk/license.txt
 * @author      Ben Tideswell <help@fishpig.co.uk>
 */

class Fishpig_Wordpress_Model_Mysql4_Postmeta_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
	public function _construct()
	{
		$this->_init('wordpress/postmeta');
	}
	public function addPostIdFilter($postId,$metaKey)
	{
	   /** **/
		$postmeta = Mage::helper('wordpress/db')->getTableName('postmeta');

        if($metaKey)
        {
          $this->getSelect()->where("meta_key = '".$metaKey."' and post_id = ".$postId);             
        }
        else
        {
           $this->getSelect()->where('post_id = '.$postId);
        } 
		
        
        return $this;
        
	}


}
