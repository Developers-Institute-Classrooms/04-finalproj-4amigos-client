import React from "react";
import "./review.css";

const ReviewForm = () => {
  return (
    <div className="main-block">
      <form action="/">
        <h1>Course Evaluation Form</h1>
        <p>
          W3docs provides free learning materials for programming languages like
          HTML, CSS, Java Script, PHP etc.
        </p>
        <h3>Rate this course using the following scale:</h3>
        <p>1 - Rarely meets expectations</p>
        <p>2 - Sometimes meets expectations</p>
        <p>3 - Meets expectations</p>
        <p>4 - Frequently exceeds expectations</p>
        <p>5 - Consistently exceeds expectations</p>
        <div>
          <h4>
            Course Offering<span class="required">*</span>
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
              <td className="first-col">Course content met your needs</td>
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
              <td className="first-col">
                Course materials, and educational resources
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
              <td className="first-col">Class location & equipment</td>
              <td>
                <input type="radio" value="none" name="equipment" required />
              </td>
              <td>
                <input type="radio" value="none" name="equipment" required />
              </td>
              <td>
                <input type="radio" value="none" name="equipment" required />
              </td>
              <td>
                <input type="radio" value="none" name="equipment" required />
              </td>
              <td>
                <input type="radio" value="none" name="equipment" required />
              </td>
            </tr>
          </table>
        </div>
        <div>
          <h4>Instructor Evaluation</h4>
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
              <td className="first-col">Knowledge of the subject matter</td>
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
              <td className="first-col">
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
              <td className="first-col">
                The instructor encouraged students to
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
              <td className="first-col">Participate in course</td>
              <td>
                <input type="radio" value="none" name="participate" />
              </td>
              <td>
                <input type="radio" value="none" name="participate" />
              </td>
              <td>
                <input type="radio" value="none" name="participate" />
              </td>
              <td>
                <input type="radio" value="none" name="participate" />
              </td>
              <td>
                <input type="radio" value="none" name="participate" />
              </td>
            </tr>
          </table>
        </div>
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
        <div className="radio-block">
          <p className="question">May We Use Your Quotes / Comments?</p>
          <div className="question-answer">
            <div>
              <input type="radio" value="none" id="radioYes" name="comments" />
              <label for="radioYes" class="radio">
                Yes
              </label>
            </div>
            <div>
              <input type="radio" value="none" id="radioNo" name="comments" />
              <label for="radioNo" class="radio">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="btn-block">
          <button type="submit" href="/">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
