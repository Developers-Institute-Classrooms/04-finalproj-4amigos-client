import React from "react";
import "./review.css";

const ReviewForm = () => {
  return (
    <div className="main-block">
      <form action="/" onSubmit={onSubmit}>
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
                  <input type="radio" value="none" name="needs" required />
                </td>
                <td>
                  <input type="radio" value="none" name="needs" required />
                </td>
                <td>
                  <input type="radio" value="none" name="needs" required />
                </td>
                <td>
                  <input type="radio" value="none" name="needs" required />
                </td>
                <td>
                  <input type="radio" value="none" name="needs" required />
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
                  Course materials and educational resources were relevant to
                  the topics
                </td>
                <td>
                  <input type="radio" value="none" name="resources" required />
                </td>
                <td>
                  <input type="radio" value="none" name="resources" required />
                </td>
                <td>
                  <input type="radio" value="none" name="resources" required />
                </td>
                <td>
                  <input type="radio" value="none" name="resources" required />
                </td>
                <td>
                  <input type="radio" value="none" name="resources" required />
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
                  <input type="radio" value="none" name="knowledge" required />
                </td>
                <td>
                  <input type="radio" value="none" name="knowledge" required />
                </td>
                <td>
                  <input type="radio" value="none" name="knowledge" required />
                </td>
                <td>
                  <input type="radio" value="none" name="knowledge" required />
                </td>
                <td>
                  <input type="radio" value="none" name="knowledge" required />
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
                  <input
                    type="radio"
                    value="none"
                    name="effectively"
                    required
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    value="none"
                    name="effectively"
                    required
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    value="none"
                    name="effectively"
                    required
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    value="none"
                    name="effectively"
                    required
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    value="none"
                    name="effectively"
                    required
                  />
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
                  The instructor was punctual and classes were of a timely
                  manner
                </td>
                <td>
                  <input type="radio" value="none" name="students" required />
                </td>
                <td>
                  <input type="radio" value="none" name="students" required />
                </td>
                <td>
                  <input type="radio" value="none" name="students" required />
                </td>
                <td>
                  <input type="radio" value="none" name="students" required />
                </td>
                <td>
                  <input type="radio" value="none" name="students" required />
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
            <textarea rows="5"></textarea>
          </div>
        </div>
        <div> &nbsp;&nbsp; </div>
        <div className="btn-block">
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
