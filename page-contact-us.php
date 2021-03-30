<?php
/**
 * Template Name: Contact Us
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page-contact-us.twig' ), $context );