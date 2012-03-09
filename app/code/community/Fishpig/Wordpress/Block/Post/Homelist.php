<?php 
class Fishpig_Wordpress_Block_Post_Homelist extends Fishpig_Wordpress_Block_Post_List_Wrapper_Abstract
{
    protected function wordpresshomelist()
  	{
  	 
  	    
        $category_id=$this->getCategoryId() ? $this->getCategoryId() : null; 

        if($category_id!=null)
        {
        
            $pieces = explode(",", $category_id);
      		  $collection = Mage::getResourceModel('wordpress/post_collection')
    			       ->setPostsPerPage()
    			       ->setPageFromUrl()
    			       ->setOrderByPostDate()
                 ->addStatusFilter('publish')
                 ->addCategoryAndPostIdFilter(null,$pieces);
                 return  $collection;
        }
        else
        {
            $collection = Mage::getResourceModel('wordpress/post_collection')
    			       ->setPostsPerPage()
    			       ->setPageFromUrl()
    			       ->setOrderByPostDate()
                 ->addStatusFilter('publish'); 
            return  $collection;       
        }   
        //return $category_id;
  		  //return $collection;
        /**  **/
  	}
    protected function description($id)
    {
       $description = Mage::getResourceModel('wordpress/postmeta_collection')->addPostIdFilter($id,'_aioseop_description');
       return $description ;
    
    
    }



}
?>