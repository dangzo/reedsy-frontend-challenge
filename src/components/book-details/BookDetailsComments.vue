<template>
  <div class="comments">
    <h3>{{ comments.length }} comments</h3>
    <div
      v-for="(comment, index) in comments"
      class="comment"
      :key="`comment-${index}`"
    >
      <div class="avatar">
        <img v-if="comment.avatar" :src="comment.avatar" />
        <img v-else src="/images/avatars/default.jpg" />
      </div>

      <div class="details">
        <!-- avatar, author, date -->
        <div class="author">
          <a
            :href="`mailto:${comment.email}`"
            :alt="`${comment.author}`"
            :title="`Mail ${comment.author}`"
          >
            {{ comment.author }}
          </a>
          -
          <span class="date">{{ formatCommentDate(comment.date) }}</span>
        </div>

        <!-- text -->
        <div class="text">
          <p>{{ comment.text }}</p>
        </div>

        <!-- reply -->
        <div class="reply">
          <a href="#" @click.prevent>Reply</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import moment from "moment";

interface comment {
  avatar?: string;
  author: string;
  email: string;
  date: string;
  text: string;
}

@Component
export default class BookDetailsComments extends Vue {
  comments: comment[] = [
    {
      avatar: "/images/avatars/1.jpg",
      author: "Julia Something",
      email: "julia@something.com",
      date: new Date().toString(),
      text: "Pretty nice book! I'd highly recommend it!"
    },
    {
      avatar: "/images/avatars/2.png",
      author: "Stan",
      email: "stan@standup.me",
      date: new Date().toString(),
      text: "That's the second static comment"
    },
    {
      avatar: "/images/avatars/3.jpg",
      author: "Stan Two",
      email: "stan-two@standup.me",
      date: new Date().toString(),
      text: "That's the third"
    },
    {
      author: "Stan By Me",
      email: "stan-by-me@standup.me",
      date: new Date().toString(),
      // prettier-ignore
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  formatCommentDate(date: string) {
    return moment(date).format("LLLL");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.comments {
  border-top: 1px dotted #996;
  margin-top: 100px;

  h3 {
    font-weight: 900;
    font-size: 22px;
    line-height: 1em;
    margin: 1em auto;
  }

  .comment {
    margin-bottom: 30px;

    p {
      font-size: 14px;
    }

    a {
      color: $text-color-h2;
      text-decoration: none;
      -webkit-transition: color linear 0.1s;
      transition: color linear 0.1s;
      font-weight: 900;

      &:hover {
        color: adjust-color($background-color-upvote, $red: 15, $green: 15);
      }
    }

    .avatar {
      float: left;
      margin-right: 20px;

      img {
        width: 50px;
        border-radius: 3px;
        box-shadow: 0 0 0 0;
      }
    }

    .details {
      margin-left: 70px;

      .author .date {
        color: #994;

        @media (max-width: 550px) {
          line-height: 20px;
        }
      }

      .text {
        margin: 15px auto;
      }
    }

    .reply a {
      font-weight: 500;
    }
  }
}
</style>
