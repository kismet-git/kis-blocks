<?php
// This file is generated. Do not modify it manually.
return array(
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kis/hero',
		'version' => '0.2.0',
		'title' => 'Hero',
		'category' => 'kis-blocks',
		'icon' => 'heading',
		'description' => 'Editorial hero for page-level introductions.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string'
			),
			'headline' => array(
				'type' => 'string'
			),
			'subhead' => array(
				'type' => 'string'
			),
			'primaryText' => array(
				'type' => 'string'
			),
			'primaryUrl' => array(
				'type' => 'string'
			),
			'alignment' => array(
				'type' => 'string',
				'enum' => array(
					'left',
					'center'
				),
				'default' => 'left'
			)
		),
		'textdomain' => 'kis-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
