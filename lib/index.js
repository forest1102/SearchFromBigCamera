const client=require('cheerio-httpcli')

const searchObject= {
	q: '生産完了',
	min: 5000,
	max: 1000000,
	rowPage: 100
}


function serialize(obj) {
	const str = [];
	for (const p in obj){
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	}
	return str.join("&");
}

global.Scraping = () => {
	
	Logger.log('scraping!')

}
global.hello=() => {
	Logger.log('hello')
}