<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud_square.jpg')" alt="maud zellner" />
    <LineTop />
    <div class="a-propos__texts">
      <h1>Who am I?</h1>
      <p>
        One day, you’re looking for a developer to provide your clients with
        websites that meet their high standards.
      </p>
      <p>
        Tons of candidates are available to you. <br />
        All of them seem interesting and talented. <br />
        But, how do you choose the right person?
      </p>
      <p>
        The key lies in those who challenge themselves every day, in those who
        are curious and constantly seeking for improvement. These are the
        individuals who will:
      </p>
      <ul>
        <li>Learn and work with the same tools as your team</li>
        <li>Produce clean, maintainable code to ensure the longevity of projects</li>
        <li>Explore new technologies and learn to use them to be as efficient as possible.</li>
      </ul>
      <p>
        My name is Maud, and I am a front-end web developer specializing in
        Three.js <br />
        I am a former 3D graphic artist, specialized in texturing, shading,
        grooming, and rendering. I have worked on advertising and creating
        visual effects for companies such as I-Réel and Digital Golem.
      </p>
      <p>
        Now as a web developer, the combination of code and design is the core
        of my approach, allowing me to create smooth, fast, and elegant web
        applications.
      </p>
      <p>
        I began learning WebGL by reading "Real-Time 3D Graphics with WebGL 2".
        Then, I explored the Three.js documentation in depth, while working on
        different projects, such as the "Avatar Creator" on The Sandbox website,
        which allows users to customize their avatars online. Through this
        experience, I was able to deepen my knowledge on shaders. For example I
        created one shader from scratch that blended two textures together,
        giving users better control over the color of their avatar.
      </p>
      <p>
        As of today, working at Stereograph, I am exploring geometry-related
        optimizations working with batching and instancing.
      </p>
      <p>
        Throughout my journey, I have learned one essential thing: every problem
        has a solution. By mastering the fundamental concepts of programming, I
        have learned to adapt quickly and evolve according to needs. I
        constantly challenge myself to be as productive, efficient, and creative
        as possible.
      </p>
      <p>
        Having now worked on multiple projects, I would be delighted to help you
        create smooth, immersive, and innovative digital experiences.
      </p>
    </div>
    <LineBottom />
  </div>
</template>

<script>
import LineTop from "@/components/LineTop.vue";
import LineBottom from "@/components/LineBottom.vue";

export default {
  name: "AProposDevComponent",
  components: {
    LineTop,
    LineBottom,
  },
};
</script>

<style lang="scss" scoped>
.a-propos {
  width: 70%;
  margin: 20px auto;
  line-height: 25px;
  @include breakpoint(800) {
    width: 80%;
  }
  &__texts {
    margin-top: 20px;
    @include flex(column, flex-start, center);
    h1 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-size: 25px;
    }
    p {
      font-family: $police-text;
      font-size: 16px;
    }
    ul {
      list-style: none;
      margin: 5px;
      font-family: $police-text;
      li {
        &::before {
          content: "\2022";
          color: $color-header-dark;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }
  img {
    margin-top: 35px;
    max-height: 200px;
    border-radius: 250px;
    border: 3px solid $color-header-dark;
    margin-left: 2%;
  }
}
</style>
