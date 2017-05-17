import dva from 'dva';
import './main-dev.html';

// 1. Initialize
const app = dva();

app.model(require("./models/consumers"));

app.model(require("./models/project"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
