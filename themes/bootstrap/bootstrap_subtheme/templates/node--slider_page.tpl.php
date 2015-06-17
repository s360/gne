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
print render($content['field_backgroud_image']['und'][0]['uri']);
$node = node_load($nid);
//var_dump($node);
$img_url = file_create_url($node->field_backgroud_image['und'][0]['uri']);
$body_content = $node->body['und'][0]['value'];
$css_classes = $node->field_css_classes['und'][0]['value'];
$nid = $node->vid;
$alias = drupal_get_path_alias('node/'.$nid);
?>
<div id="<?php echo $alias ?>" class="body-content <?php if($css_classes) echo $css_classes; ?>" style="<?php if(!empty ($img_url)): ?>background-image: url('<?php echo $img_url; ?>')<?php endif;?>">
    <?php echo $body_content ?>
</div>