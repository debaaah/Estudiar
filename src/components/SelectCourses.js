import React from 'react';
import { Checkbox } from './Textfield';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom'
import { Dash } from './Dashboard'

export const SelectCourses = () => {
  let history = useHistory();
    let selected = [];
    const crossCheck = () => {
        return (
             <ul>
            { selected.map(item => (
                <li> {item} </li>
                ))
            }
            </ul>
        )
    }
    const Dashboard = () => {
        history.push('/dashboard')
    }
    return (
        <Formik
        initialValues={{
            checked: []
        }}
        onSubmit = {values => {
            
        selected = values.checked;
        console.log('this is selected: ', selected, 'this is value:', values)
        return selected;
        }
        }
        >
       {formik => (
           <div className='section courses'>
               <h1>Register Courses</h1>
               <Form className= ''>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>100 Level courses</h3>
                   <Checkbox value='CHM 111: General Chemistry I' label='CHM 111: General Chemistry I'  name='checked'  id='defaultCheck1' />
                   <Checkbox value='CSC 110: Introduction to Computing' label='CSC 110: Introduction to Computing' name='checked' id=" defaultCheck2"/>
                   <Checkbox value='CSC 111: Programming Essentials' label='CSC 111: Programming Essentials' name='checked'  id="defaultCheck3" />
                   <Checkbox value='GST 111: Use of English I' label='GST 111: Use of English I' name='checked' id="defaultCheck4" />
                   <Checkbox label='GST 112: Philosophy and Logic' value='GST 112: Philosophy and Logic' name='checked'   id="defaultCheck5" />
                   <Checkbox value='MTH 110: Algebra and Trigonometry' label='MTH 110: Algebra and Trigonometry' name='checked'  id="defaultCheck6" />
                   <Checkbox value='MTH 112: Calculus' label='MTH 112: Calculus'name='checked' id="defaultCheck7" />
                   <Checkbox value='PHY 111: Mechanical, Thermal &amp; Physical properties of matter'label='PHY 111: Mechanical, Thermal &amp; Physical properties of matter' name='checked' id="defaultCheck8" />
                   <Checkbox value='PHY 109: Practical Physics' label='PHY 109: Practical Physics' name='checked'  id="defaultCheck9" />
                   <Checkbox value='CHM 122: General Chemistry II' label='CHM 122: General Chemistry II' name='checked' id="defaultCheck10" />
                   <Checkbox value='CSC 120: Introduction to Software Packages' label='CSC 120: Introduction to Software Packages' name='checked' id="defaultCheck11" />
                   <Checkbox value='GST 121: Peace Studies and Conflict Resolution' label='GST 121: Peace Studies and Conflict Resolution' name='checked' id="defaultCheck12" />
                   <Checkbox value='GST 122: Nigerian People and Culture' label='GST 122: Nigerian People and Culture' name='checked' id="defaultCheck13" />
                   <Checkbox value='GST 123: History and Philosophy of Science and Technology' label='GST 123: History and Philosophy of Science and Technology' name='checked'   id="defaultCheck14" />
                   <Checkbox value='MTH 123: Vectors, Geometry and Statistics' label='MTH 123: Vectors, Geometry and Statistics' name='checked'   id="defaultCheck15" />
                   <Checkbox value='MTH 125: Differential equation and Dynamics' label='MTH 125: Differential equation and Dynamics' name='checked'  id="defaultCheck16" />
                   <Checkbox value='PHY 124: Electromagnetism and Modern Physics' label='PHY 124: Electromagnetism and Modern Physics' name='checked' id="defaultCheck17" />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>200 Level courses</h3>
                   <Checkbox value='CSC 211: Structured programming in PASCAL' label='CSC 211: Structured programming in PASCAL' name='checked' id='defaultCheck18' />
                   <Checkbox value='CSC 212: Symbolic programming in FORTRAN' label=' CSC 212: Symbolic programming in FORTRAN' name='checked' id='defaultCheck19' />
                   <Checkbox value='CSC 217: Information Technology: Design, Policy and Application' label='CSC 217: Information Technology: Design, Policy and Application' name='checked' id='defaultCheck20' />
                   <Checkbox value='CSC 237: Information Interfaces and Presentation' label='CSC 237: Information Interfaces and Presentation' name='checked' id='defaultCheck21' />
                   <Checkbox value='MTH 219: Statistics' label='MTH 219: Statistics' name='checked' id='defaultCheck22' />
                   <Checkbox value='MTH 230: Linear algebra' label='MTH 230: Linear algebra' name='checked' id='defaultCheck23' />
                   <Checkbox value='CSC 220: Introduction to Data Processing' label='CSC 220: Introduction to Data Processing' name='checked' id='defaultCheck24' />
                   <Checkbox value='CSC 222: Assembly Language programming I' label='CSC 222: Assembly Language programming I' name='checked' id='defaultCheck25' />
                   <Checkbox value='CSC 224: Introduction to C and C++ programming' label='CSC 224: Introduction to C and C++ programming' name='checked' id='defaultCheck26' />
                   <Checkbox value='MTH 227: Introduction to Numerical Analysis' label='MTH 227: Introduction to Numerical Analysis' name='checked' id='defaultCheck27' />
                   <Checkbox value='PHY 224: Electromagnetism and Electronics' label='PHY 224: Electromagnetism and Electronics' name='checked' id='defaultCheck28' />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>300 Level courses</h3>
                   <Checkbox value='CSC 311: Web Technology &amp; Application' label='CSC 311: Web Technology &amp; Application' name='checked' id='defaultCheck29' />
                   <Checkbox value='CSC 312: Assembly Language Programming' label='CSC 312: Assembly Language Programming' name='checked' id='defaultCheck30' />
                   <Checkbox value='CSC 313: Data Structure' label='CSC 313: Data Structure' name='checked' id='defaultCheck31' />
                   <Checkbox value='CSC 314: Operations Research' label='CSC 314: Operations Research' name='checked' id='defaultCheck32' />
                   <Checkbox value='CSC 316: Digital Computer Design' label='CSC 316: Digital Computer Design' name='checked' id='defaultCheck33' />
                   <Checkbox value='CSC 318: Introduction to Formal Languages' label='CSC 318: Introduction to Formal Languages' name='checked' id='defaultCheck34' />
                   <Checkbox value='MTH 317: Numerical Linear Algebra' label='MTH 317: Numerical Linear Algebra' name='checked' id='defaultCheck35' />
                   <Checkbox value='CED 300: Entrepreneuship Development' label='CED 300: Entrepreneuship Development' name='checked' id='defaultCheck36' />
                   <Checkbox value='CSC 321: Systems Analysis and Design' label='CSC 321: Systems Analysis and Design' name='checked' id='defaultCheck37' />
                   <Checkbox value='CSC 325: Compiler Construction' label='CSC 325: Compiler Construction' name='checked' id='defaultCheck38' />
                   <Checkbox value='CSC 329: Research Methodology' label='CSC 329: Research Methodology' name='checked' id='defaultCheck39' />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>400 Level courses</h3>
                   <Checkbox value='CSC 400: Seminars' label='CSC 400: Seminars' name='checked' id='defaultCheck40' />
                   <Checkbox value=' CSC 411: Operationg systems' label=' CSC 411: Operationg systems' name='checked' id='defaultCheck41' />
                   <Checkbox value='CSC 413: Database Management' label='CSC 413: Database Management' name='checked' id='defaultCheck42' />
                   <Checkbox value='CSC 414: Management Science' label='CSC 414: Management Science' name='checked' id='defaultCheck43' />
                   <Checkbox value='CSC 415: Artificial Intelligence' label='CSC 415: Artificial Intelligence' name='checked' id='defaultCheck44' />
                   <Checkbox value='CSC 418: Advanced design and analysis of algorithm' label='CSC 418: Advanced design and analysis of algorithm' name='checked' id='defaultCheck45' />
                   <Checkbox value='CSC 432: Systems Programming' label='CSC 432: Systems Programming' name='checked' id='defaultCheck46' />
                   <Checkbox value='CSC 326: Computer Architecture' label='CSC 326: Computer Architecture' name='checked' id='defaultCheck47' />
                   <Checkbox value='CSC 421: Software Engineering' label='CSC 421: Software Engineering' name='checked' id='defaultCheck48' />
                   <Checkbox value='CSC 422: Concept of Programming language' label='CSC 422: Concept of Programming language' name='checked' id='defaultCheck49' />
                   <Checkbox value='CSC 427: Data Communication Network' label='CSC 427: Data Communication Network' name='checked' id='defaultCheck50' />
                   <Checkbox value='CSC 499: Project' label='CSC 499: Project' name='checked' id='defaultCheck51' />
                   </div>
                   <button className='btn mt-3 col-3 my-btn' type='submit'  data-toggle="modal" data-target="#exampleModal">Done</button>
               </Form>
               <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">You've selected {selected.length} courses</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {crossCheck(selected) }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Edit</button>
        <button type="submit" className="btn my-btn" data-dismiss="modal" onClick={Dashboard}>Register</button>
      </div>
    </div>
  </div>
</div>
       </div>
       )
       }
        </Formik>
    )
}