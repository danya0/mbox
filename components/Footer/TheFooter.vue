<template>
  <div class="footer-wrap">
    <div class="container">
      <footer class="footer">
        <div class="footer-block">
          <app-logo />
          <div class="social-block">
            <a v-for="link of links" :href="link.link" @click.prevent="">
              <img :src="link.img" :alt="link.alt">
            </a>
          </div>
        </div>
        <div class="footer-block">
          <div class="footer-links">
            <div class="footer-links-block">
              <a href="#" class="footer-links__link">Voice over and Subtitle</a>
              <a href="#" class="footer-links__link">Media Center</a>
              <a href="#" class="footer-links__link">Privacy</a>
              <a href="#" class="footer-links__link">Contact us</a>
            </div>
            <div class="footer-links-block">
              <a href="#" class="footer-links__link">Voice Description</a>
              <a href="#" class="footer-links__link">Investor Relations</a>
              <a href="#" class="footer-links__link">Legal Provisions</a>
            </div>
            <div class="footer-links-block">
              <a href="#" class="footer-links__link">Help Center</a>
              <a href="#" class="footer-links__link">Job Opportunities</a>
              <a href="#" class="footer-links__link">Cookies Preferences</a>
            </div>
            <div class="footer-links-block">
              <a href="#" class="footer-links__link">Gift Cards</a>
              <a href="#" class="footer-links__link">Terms of Use</a>
              <a href="#" class="footer-links__link">Corporate Informations</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo";
import TwitterSvg from "~/assets/img/social/twitter.svg"
import FacebookSvg from "~/assets/img/social/facebook.svg"
import InSvg from "~/assets/img/social/in.svg"
import InstagramSvg from "~/assets/img/social/instagram.svg"

export default {
  data() {
    return {
      links: [
        {
          img: FacebookSvg,
          link: '#',
          alt: 'facebook'
        },
        {
          img: TwitterSvg,
          link: '#',
          alt: 'twitter'
        },
        {
          img: InSvg,
          link: '#',
          alt: 'in'
        },
        {
          img: InstagramSvg,
          link: '#',
          alt: 'instagram'
        },
      ]
    }
  },
  components: {AppLogo}
}
</script>

<style lang="scss" scoped>
.footer {
  &-wrap {
    background: #101012;
  }

  &-block {
    &:first-child {
      margin-right: 85px;
      @include grid-tablet {
        margin-right: 50px;
      }
      @include grid-mobile {
        margin: 0 0 20px 0;
      }
    }
    &:last-child {
      flex: 1;
      @include grid-tablet {
        flex: none;
      }
    }
  }

  display: flex;
  justify-content: space-between;
  padding: 70px 0;

  @include grid-tablet {
    justify-content: center;
  }

  @include grid-mobile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 0;
  }

  &-links {
    width: 100%;
    display: grid;
    grid-template: 1fr / repeat(4, 1fr);

    &-block {
      display: flex;
      flex-direction: column;
    }

    &__link {
      font-weight: 600;
      font-size: 18px;
      color: #C2C2C2;
      &:not(&:last-child) {
        margin-bottom: 20px;
      }

      @include grid-laptop {
        font-size: 16px;
      }
    }

    @include grid-laptop {
      grid-template: 1fr 1fr / 1fr 1fr;
      grid-row-gap: 20px;
    }

    @include grid-tablet {
      grid-template: repeat(4, auto) / 1fr;
    }
  }
}

.social-block {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;

  @include grid-mobile {
    margin: 20px auto 0 auto;
  }
}
</style>
