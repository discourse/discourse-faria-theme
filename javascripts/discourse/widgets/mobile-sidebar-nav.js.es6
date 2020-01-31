import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";
import DiscourseURL from "discourse/lib/url";
import { userPath } from "discourse/lib/url";

createWidget("mobile-sidebar-nav", {
  tagName: "div.another",

  template: hbs`
  <div class="custom-sidebar-nav-contents">

    <h3> Student Community </h3>

    <ul>
      <li ><a class="widget-link" href="/" >{{d-icon 'faria-chat'}} <span class="sidebar-nav-text">Forums</span> </a></li>
      <li><a class="widget-link" href="/my/activity">{{d-icon 'faria-documents'}} <span class="sidebar-nav-text">My Posts</span> </a></li>
      <li><a class="widget-link" href="/categories">{{d-icon 'faria-stack'}} <span class="sidebar-nav-text">Categories</span> </a></li>
      <li><a class="widget-link" href="/my/activity">{{d-icon 'faria-path'}} <span class="sidebar-nav-text">Activity</span> </a></li>
      <li><a class="widget-link" href="/faq">{{d-icon 'faria-question'}} <span class="sidebar-nav-text">FAQ & Policies</span> </a></li>
    </ul>

    <h3> Subject Center </h3>

    <ul>
      <li><a class="widget-link" href="/">{{d-icon 'faria-clipboard'}} <span class="sidebar-nav-text">DP Assessment</span> </a></li>
      <li><a class="widget-link" href="/">{{d-icon 'faria-clock'}}<span class="sidebar-nav-text">Deadlines</span> </a></li>
      <li><a class="widget-link" href="/">{{d-icon 'faria-calendar'}} <span class="sidebar-nav-text">Exam Calendar</span> </a></li>
      <li><a class="widget-link" href="/">{{d-icon 'faria-resources'}} <span class="sidebar-nav-text">Resources</span> </a></li>
      <li><a class="widget-link" href="/">{{d-icon 'faria-map'}} <span class="sidebar-nav-text">Curriculum </span></a></li>
    </ul>

    <h3> Openapply </h3>

    <ul>
      <li><a class="widget-link" href="/">{{d-icon 'faria-book'}} <span class="sidebar-nav-text">International Admissions Bulletin</span> </a></li>
    </ul>

    <h3> Managebac </h3>

    <ul>
      <li><a class="widget-link" href="/">{{d-icon 'faria-docsearch'}} <span class="sidebar-nav-text">Product Roadmap & Changelog</span> </a></li>
      <li><a class="widget-link" href="/">{{d-icon 'faria-blog'}} <span class="sidebar-nav-text">Blog</span> </a></li>
      <li><a class="widget-link" href="/my/summary">{{d-icon 'faria-user'}} <span class="sidebar-nav-text">Profile</span> </a></li>
    </ul>


  </div>

  `,

  click(e) {
    e.preventDefault();
    this.sendWidgetAction("toggleNav");
    DiscourseURL.routeToTag($(e.target).closest("a")[0]);
  }
});
