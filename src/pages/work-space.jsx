


export const WorkSpace = () => {
    return (
        <div className="user-boards-container">
          <section className="user-boards-list">

            <div className="starred-boards">
              <section className="starred-boards-header">
                <h3>Starred boards</h3>
              </section>

              <div className="boards-list">
              </div>
            </div>


            <div className="my-boards">
              <div className="my-boards-header">
                <h3>Recently viewed</h3>
              </div>
              <div className="boards-list">
              </div>
            </div>
          </section>
        </div>
      )
    }