@extends('app')
@section('title', $faq_title)
@include('others.faq.atoms.faq_contents', ['title' => $faq_title])