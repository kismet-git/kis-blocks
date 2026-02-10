<?php
/**
 * Dynamic render for Hero block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$eyebrow      = isset( $attributes['eyebrow'] ) ? trim( $attributes['eyebrow'] ) : '';
$headline     = isset( $attributes['headline'] ) ? trim( $attributes['headline'] ) : '';
$subhead      = isset( $attributes['subhead'] ) ? trim( $attributes['subhead'] ) : '';
$primary_text = isset( $attributes['primaryText'] ) ? trim( $attributes['primaryText'] ) : '';
$primary_url  = isset( $attributes['primaryUrl'] ) ? trim( $attributes['primaryUrl'] ) : '';
$alignment    = isset( $attributes['alignment'] ) ? $attributes['alignment'] : 'left';
$alignment    = in_array( $alignment, array( 'left', 'center' ), true ) ? $alignment : 'left';

if ( '' === $headline ) {
	return '';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'kb-hero kb-hero--align-' . $alignment,
	)
);
?>
<section <?php echo $wrapper_attributes; ?>>
	<div class="kb-hero__inner">
		<?php if ( '' !== $eyebrow ) : ?>
			<p class="kb-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
		<?php endif; ?>
		<h1 class="kb-hero__headline"><?php echo esc_html( $headline ); ?></h1>
		<?php if ( '' !== $subhead ) : ?>
			<p class="kb-hero__subhead"><?php echo esc_html( $subhead ); ?></p>
		<?php endif; ?>
		<?php if ( '' !== $primary_text && '' !== $primary_url ) : ?>
			<div class="kb-hero__actions">
				<a class="kb-hero__cta" href="<?php echo esc_url( $primary_url ); ?>">
					<?php echo esc_html( $primary_text ); ?>
				</a>
			</div>
		<?php endif; ?>
	</div>
</section>
