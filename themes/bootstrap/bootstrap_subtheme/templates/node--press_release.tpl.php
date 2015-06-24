<?php
/**
 * Created by PhpStorm.
 * User: Upwardstech
 * Date: 6/16/15
 * Time: 1:11 PM
 */

/*print $content['field_backgroud_image']['#items'][0]['value'];
echo '<pre>';
print_r($content);
echo '</pre>';*/
//print render($content['field_backgroud_image']['und'][0]['uri']);
$node = node_load($nid);
//var_dump($node);
$img_url = file_create_url($node->field_backgroud_image['und'][0]['uri']);
$body_content = $node->body['und'][0]['value'];
$css_classes = $node->field_css_classes['und'][0]['value'];
$nid = $node->vid;
$title= $node->title;
$alias = drupal_get_path_alias('node/'.$nid);
?>
<div  data-hash="#!/<?php echo $alias ?>" id="<?php echo $alias ?>" class="node node-press-release <?php if($css_classes) echo $css_classes; ?>" <?php if($img_url)?>style="background-image: url('<?php echo $img_url; ?>')">
    <h2><a><?php echo $title;?></a></h2>

        <?php echo $body_content ?>


</div>