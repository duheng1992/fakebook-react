import axios from 'axios';

import { configUrl } from './config_url';

axios.defaults.baseURL = configUrl.backend;

const getAllPost = () => {
	return (
		axios({
	      method: 'get',
	      url: '/user-post',
	    })
	)
	
}

export { getAllPost }
    
