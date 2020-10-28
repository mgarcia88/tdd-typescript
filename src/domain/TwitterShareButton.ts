import AbstractShareButton from "./AbstractShareButton";

export default class TwitterShareButton extends AbstractShareButton{
		constructor(clazz:string, url:string){
			super(clazz, url);

		}

		createLink(){
				return `https://www.twitter.com/share?url=${this.url}`;
		}
}