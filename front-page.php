<?php
/**
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$context['post'] = new Timber\Post();
$template        = 'front-page.twig';
Timber::render( $template, $context );
