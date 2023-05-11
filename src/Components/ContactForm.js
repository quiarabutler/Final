export default function ContactForm () {
    return(

        <div className="container">
        <div className="row">
          <div className="col-sm">
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email" />
              </div>
              <div className="form-group">
                <br />
                <div className="form-group">
                  <label htmlFor="Message">Message:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
              </div>
              <br /><br />
              <button type="submit" className="btn btn-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
