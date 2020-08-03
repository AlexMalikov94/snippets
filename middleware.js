const middleware = {}

middleware['redirectIfAuthenticated'] = require('@/middleware/redirectIfAuthenticated.js');
middleware['redirectIfAuthenticated'] = middleware['redirectIfAuthenticated'].default || middleware['redirectIfAuthenticated']

middleware['redirectIfguest'] = require('@/middleware/redirectIfguest.js');
middleware['redirectIfguest'] = middleware['redirectIfguest'].default || middleware['redirectIfguest']

export default middleware
