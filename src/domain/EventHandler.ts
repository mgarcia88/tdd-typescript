export default class EventHandler{
	addEventListenerToClass(clazz:string, event:string,action:any){
		const elements:any = document.querySelectorAll(clazz);

		for (const element of elements){
			element.addEventListener(event, action);
		}
	}
}