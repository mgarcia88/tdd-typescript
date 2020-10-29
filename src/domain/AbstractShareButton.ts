import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
	url: string;
	clazz: string;
	eventHandler: EventHandler;

	/**
		* 
		* @param clazz 
		* @param url 
		*/
	constructor(clazz: string, url: string) {
		this.url = url;
		this.clazz = clazz;
		this.eventHandler = new EventHandler();
	}

	bind() {
		const link = this.createLink();
	}

	abstract createLink(): string;
}