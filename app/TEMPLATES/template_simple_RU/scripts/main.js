'use strict';

const $ = require('jquery');

/**
 * ScrollToTop
 */
function initScrollToTop() {
  const ScrollToTop = require('./_scrollToTop');
  const isScrollToTopFunc = new ScrollToTop();

  isScrollToTopFunc.init();
}

/**
 * Persons table
 */
function initTablePersons() {
  const TablePersons = require('./_tablePersons');
  const isTablePersonsFunc = new TablePersons();

  isTablePersonsFunc.init();
}

/**
 * Families table
 */
function initTableFamilies() {
  const TableFamilies = require('./_tableFamilies');
  const isTableFamiliesFunc = new TableFamilies();

  isTableFamiliesFunc.init();
}

/**
 * Events table
 */
function initTableEvents() {
  const TableEvents = require('./_tableEvents');
  const isTableEventsFunc = new TableEvents();

  isTableEventsFunc.init();
}

/**
 * Facts table
 */
function initTableFacts() {
  const TableFacts = require('./_tableFacts');
  const isTableFactsFunc = new TableFacts();

  isTableFactsFunc.init();
}

/**
 * Personal Events table
 */
function initTableEventsPers() {
  const TableEventsPers = require('./_tableEventsPers');
  const isTableEventsPersFunc = new TableEventsPers();

  isTableEventsPersFunc.init();
}

/**
 * Personal Events table
 */
function initTableChildren() {
  const TableChildren = require('./_tableChildren');
  const isTableChildrenFunc = new TableChildren();

  isTableChildrenFunc.init();
}

/**
 * Carousels
 */
function initCarousels() {
  const Carousels = require('./_carousels');
  const isCarouselsFunc = new Carousels();

  isCarouselsFunc.init();
}

/**
 * Lightboxes
 */
function initLightboxes() {
  const Lightboxes = require('./_lightboxes');
  const isLightboxesFunc = new Lightboxes();

  isLightboxesFunc.init();
}

/**
 * Photoalbums / File tree
 * Won't work because of @..@ placeholders for Generatree
 */
// function initPhotoalbums() {
//   const Photoalbums = require('./_photoalbums');
//   const isPhotoalbumsFunc = new Photoalbums();
//
//   isPhotoalbumsFunc.init();
// }

function allScripts() {
  initScrollToTop();
  initTablePersons();
  initTableFamilies();
  initTableEvents();
  initTableFacts();
  initTableEventsPers();
  initTableChildren();
  initCarousels();
  initLightboxes();
  // initPhotoalbums();
}

allScripts();

