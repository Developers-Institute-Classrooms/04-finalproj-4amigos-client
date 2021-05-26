import React from "react";
import "./review.css";

const ReviewForm = () => {
  return (
    <div className="main-block" action="/">
      <div>
        <h4>
          Questions<span className="required"></span>
        </h4>
        <table>
          <tbody>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="Q1">Course content met your needs</td>
              <td>
                <input type="radio" value="1" name="needs" required />
              </td>
              <td>
                <input type="radio" value="2" name="needs" required />
              </td>
              <td>
                <input type="radio" value="3" name="needs" required />
              </td>
              <td>
                <input type="radio" value="4" name="needs" required />
              </td>
              <td>
                <input type="radio" value="5" name="needs" required />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="Q2">
                Course materials and educational resources were relevant to the
                topics
              </td>
              <td>
                <input type="radio" value="1" name="resources" required />
              </td>
              <td>
                <input type="radio" value="2" name="resources" required />
              </td>
              <td>
                <input type="radio" value="3" name="resources" required />
              </td>
              <td>
                <input type="radio" value="4" name="resources" required />
              </td>
              <td>
                <input type="radio" value="5" name="resources" required />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="Q3">Knowledge of the subject matter</td>
              <td>
                <input type="radio" value="1" name="knowledge" required />
              </td>
              <td>
                <input type="radio" value="2" name="knowledge" required />
              </td>
              <td>
                <input type="radio" value="3" name="knowledge" required />
              </td>
              <td>
                <input type="radio" value="4" name="knowledge" required />
              </td>
              <td>
                <input type="radio" value="5" name="knowledge" required />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="Q4">
                Communicated the course material effectively
              </td>
              <td>
                <input type="radio" value="1" name="effectively" required />
              </td>
              <td>
                <input type="radio" value="2" name="effectively" required />
              </td>
              <td>
                <input type="radio" value="3" name="effectively" required />
              </td>
              <td>
                <input type="radio" value="4" name="effectively" required />
              </td>
              <td>
                <input type="radio" value="5" name="effectively" required />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="Q5">
                The instructor was punctual and classes were of a timely manner
              </td>
              <td>
                <input type="radio" value="1" name="students" required />
              </td>
              <td>
                <input type="radio" value="2" name="students" required />
              </td>
              <td>
                <input type="radio" value="3" name="students" required />
              </td>
              <td>
                <input type="radio" value="4" name="students" required />
              </td>
              <td>
                <input type="radio" value="5" name="students" required />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div> &nbsp;&nbsp; </div>
      <div className="comments-block">
        <h4 className="comments">
          Comments
          <small>
            Please let us know what could be done to improve this course
          </small>
        </h4>
        <div className="answer">
          <textarea name="comment" rows="5"></textarea>
        </div>
      </div>
      <div> &nbsp;&nbsp; </div>
    </div>
  );
};

export default ReviewForm;
