import { Fragment } from 'react';
import Header from './Header';
import './info.css';
function Info() {
  
  return (
   <Fragment>
    
    <section>
        <div className="container">
                    <form>
                        <h2>EDIT INFORMATION</h2>

                        <div className="formBx">
                        <input type="text" placeholder="Name" className="inpBox"/>
                        <input type="text" placeholder="Lives in" className="inpBox"/>
                        <input type="text" placeholder="Work" className="inpBox"/>
                        <input type="text" placeholder="Education" className="inpBox"/>
                        </div>
                        
                    </form> 
        </div>
    </section>
    </Fragment>
    
  );
}

export default Info;

