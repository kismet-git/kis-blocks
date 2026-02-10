<?php
/**
 * Plugin Name:       Kis Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kis-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Kis Blocks category in the block inserter.
 *
 * @param array   $categories Block categories.
 * @param WP_Post $post       Post being edited.
 * @return array
 */
function kis_blocks_register_category( $categories, $post ) {
	foreach ( $categories as $category ) {
		if ( isset( $category['slug'] ) && 'kis-blocks' === $category['slug'] ) {
			return $categories;
		}
	}

	return array_merge(
		array(
			array(
				'slug'  => 'kis-blocks',
				'title' => __( 'Kis Blocks', 'kis-blocks' ),
				'icon'  => null,
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'kis_blocks_register_category', 10, 2 );

/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_kis_blocks_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_block_kis_blocks_block_init' );
