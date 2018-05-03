
import * as client from 'cheerio-httpcli'
type SearchObject = {
	q: string
	min: number
	max: number
	rowPage: number
	[key: string]: any
}

const searchObject: SearchObject = {
	q: '生産完了',
	min: 5000,
	max: 1000000,
	rowPage: 100
}


function serialize(obj: SearchObject) {
	const str = [];
	for (const p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	return str.join("&");
}

global.Scraping = () => {
	const html = UrlFetchApp.fetch('https://www.biccamera.com/bc/category/')
		.getContentText('shift-jis')

	html.match(/<li(.*?)*?\sdata-item="data-item"\s(.*?)>[\s\S]*?<\/li>/g)
		.forEach((e) => {
			Logger.log(e)
		})

}


