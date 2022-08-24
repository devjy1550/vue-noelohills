<template>
  <section class="sitemap">
    <div class="inner">
      <ul class="sitemap-menu clearfix">
        <li><a href="">SHOP</a>
          <ul class="sitemap-submenu">
            <li><a href="">ALL PRODUCT</a></li>
            <li><a href="">NEWBORN</a></li>
            <li><a href="">BABY</a></li>
            <li><a href="">FAMILY</a></li>
            <li><a href="">BATH GOODS</a></li>
            <li><a href="">PRESENTS</a></li>
          </ul>
        </li>
        <li><a href="">ABOUT</a>
          <ul class="sitemap-submenu">
            <li><a href="">BRAND STORY</a></li>
            <li><a href="">WHO WE ARE</a></li>
            <li><a href="">MAKE A WISH</a></li>
            <li><a href="">PRESS</a></li>
          </ul>
        </li>
        <li><a href="">TRUST</a>
          <ul class="sitemap-submenu">
            <li><a href="">FOOD GRADE</a></li>
            <li><a href="">PENTACERA<sup>TM</sup></a></li>
            <li><a href="">BABY SKINCARE</a></li>
            <li><a href="">CERTIFICATIONS</a></li>
            <li><a href="">INGREDIENT</a></li>
          </ul>
        </li>
        <li><a href="">STOCKISTS</a>
        </li>
        <li><a href="">REVIEW</a>
        </li>
        <li><a href="">BENEFITS</a>
          <ul class="sitemap-submenu">
            <li><a href="">EVENTS</a></li>
            <li><a href="">MEMBERS</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style>

  .sitemap {
    position: relative;
    display: block;
    padding: 35px 0;
    border-top: 1px solid #dcdcdc;
  }

  .sitemap .inner {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .sitemap .inner .sitemap-menu {
    position: relative;
    display: table;
    width: 770px;
  }

  .sitemap .inner .sitemap-menu>li {
    position: relative;
    display: table-cell;
    margin-right: 40px;
  }

  .sitemap .inner .sitemap-menu>li:hover>a {
    color: #ffcc00;
  }

  .sitemap .inner .sitemap-menu>li>a {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0px 15px;
  }

  .sitemap .inner .sitemap-menu>li>a:hover {
    color: #ffcc00;
  }

  @media all and (max-width: 800px) {
    .sitemap .inner .sitemap-menu>li>a {
      font-size: 12px;
    }
  }

  .sitemap .inner .sitemap-menu>li .sitemap-submenu {
    position: relative;
    display: block;
  }

  .sitemap .inner .sitemap-menu>li .sitemap-submenu li {
    position: relative;
    display: block;
    margin-bottom: 15px;
  }

  .sitemap .inner .sitemap-menu>li .sitemap-submenu li a {
    position: relative;
    display: inline-block;
    font-size: 12px;
    color: #777;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: -0.05px;
  }

  .sitemap .inner .sitemap-menu>li .sitemap-submenu li a:hover {
    color: #ffcc00;
  }

  @media all and (max-width: 800px) {
    .sitemap .inner .sitemap-menu>li .sitemap-submenu li a {
      font-size: 10px;
    }
  }
</style>