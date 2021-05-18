import React from "react";
import "./review.css";

const ReviewForm = () => {
  return (
    <div className="main-block">
      <form action="/">
        <h1>Course Evaluation Form</h1>
        <p>
          Students we ask for your honest feedback on how this semester was run
          so that we can continuously improve and adjust how we run our
          semesters.
        </p>
        <h3>Rate this course using the following scale:</h3>
        <p>1 - Rarely meets expectations</p>
        <p>2 - Sometimes meets expectations</p>
        <p>3 - Meets expectations</p>
        <p>4 - Frequently exceeds expectations</p>
        <p>5 - Consistently exceeds expectations</p>
        <div>
          <h4>
            Questions<span className="required">*</span>
          </h4>
          <table>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
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
          </table>
          <table>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <td className="Q2">
                Course materials and educational resources were relevant to the
                topics
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
          </table>
          <table>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <td className="Q3">Knowledge of the subject matter</td>
              <td>
                <input type="radio" value="none" name="knowledge" />
              </td>
              <td>
                <input type="radio" value="none" name="knowledge" />
              </td>
              <td>
                <input type="radio" value="none" name="knowledge" />
              </td>
              <td>
                <input type="radio" value="none" name="knowledge" />
              </td>
              <td>
                <input type="radio" value="none" name="knowledge" />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <td className="Q4">
                Communicated the course material effectively
              </td>
              <td>
                <input type="radio" value="none" name="effectively" />
              </td>
              <td>
                <input type="radio" value="none" name="effectively" />
              </td>
              <td>
                <input type="radio" value="none" name="effectively" />
              </td>
              <td>
                <input type="radio" value="none" name="effectively" />
              </td>
              <td>
                <input type="radio" value="none" name="effectively" />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th className="first-col"></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <td className="Q5">
                The instructor was punctual and classes were of a timely manner
              </td>
              <td>
                <input type="radio" value="none" name="students" />
              </td>
              <td>
                <input type="radio" value="none" name="students" />
              </td>
              <td>
                <input type="radio" value="none" name="students" />
              </td>
              <td>
                <input type="radio" value="none" name="students" />
              </td>
              <td>
                <input type="radio" value="none" name="students" />
              </td>
            </tr>
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
