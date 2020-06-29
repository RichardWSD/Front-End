const baseUrl="https://douban-api.uieee.com";

export const getInTheaters=params=>(
	//正在上映的电影
		uni.request({
		    url: `${baseUrl}/v2/movie/in_theaters`,
			data:params,
			header:{
				"content-type":"json"
			}
			//不加success,默认直接返回一个promis
			// success(res) {
			// 	resolve(res);
			// }
		})
)
export const comingSoon=params=>(
	//即将上映的电影
		uni.request({
		    url: `${baseUrl}/v2/movie/coming_soon`,
			data:params,
			header:{
				"content-type":"json"
			}
		})
)
export const newMovies=params=>(
	//豆瓣电影新片榜
		uni.request({
		    url: `${baseUrl}/v2/movie/new_movies`,
			data:params,
			header:{
				"content-type":"json"
			}
		})
)
export const top250=params=>(
	//豆瓣电影新片榜
		uni.request({
		    url: `${baseUrl}/v2/movie/top250`,
			data:params,
			header:{
				"content-type":"json"
			}
		})
)

export const details=id=>(
	//电影详情
		uni.request({
		    url: `${baseUrl}/v2/movie/subject/${id}`,
			header:{
				"content-type":"json"
			}
		})
)
