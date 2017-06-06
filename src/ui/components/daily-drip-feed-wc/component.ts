import Component, {tracked} from "@glimmer/component";

export default class DailyDripFeedWc extends Component {
  @tracked results;
  constructor(options) {
    super(options);
    this.getFeed();
  };
  async getFeed(){
    let jsonFeed = await fetch('http://rss2json.com/api.json?rss_url=https%3A%2F%2Fwww.dailydrip.com%2Ftopics%2Fember%2Ffeed.rss');
    this.results = await jsonFeed.json();
  };
}
