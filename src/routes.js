import React from 'react'

import { BrowserRouter,
    Switch,
    Route}
from 'react-router-dom'

import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import NotFound from './pages/NotFound'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/pagina1" component={Page1} />
                <Route path="/pagina2" component={Page2} />
                <Route path="/pagina3" component={Page3} />
                <Route path="/pagina4" component={Page4} />
                <Route path="/pagina5" component={Page5} />
                <Route path="/pagina6" component={Page6} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}