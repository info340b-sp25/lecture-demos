import React from 'react';

export function HeaderBar(props) {
  const {usersData, loginUser, 
    currentUser} = props;

  //event handler
  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = usersData.filter((userObj) => userObj.userId === whichUser)[0] || usersData[0] //null user if not found

    console.log(selectedUserObj);
    loginUser(selectedUserObj);
  }

  //for convenience
  const userButtons = usersData.map((userObj) => {
    let classListString = "btn user-icon"

    if(userObj.userId == currentUser.userId){
      classListString += " bg-success"
    }

    return (
      <button className={classListString} key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
      </button>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )
}