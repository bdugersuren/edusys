


    <div className={styles.TaskBoxCenter}>
    <div className={styles.TaskBoxCenter2}>
      

        <button className={styles.TaskFixedButton} onClick={() => setIsExpendAllTask(!isExpendAllTask)}>
          {tasks.checked ? <BiVerticalCenter /> : <BiMoveVertical />}
          Бүх асуулт2
        </button>
      

   
        <button onClick={() => setIsExpendAllAns(!isExpendAllAns)}>
          {isExpendAllAns ? <BiScan /> : <BiOutline />}
          Бүх хариулт
        </button>
    

      <div className={styles.TaskInfo1}>
        <label>
          Нийт даалгавар: 565
          {/* {filteredTasks.length} */}
        </label>
      </div>

      <div className={styles.TaskInfo2}>
        <label>
          Сонгогдсон даалгавар: 85
          {/* {selectedTasks.length} */}
        </label>
      </div>
    </div>
    {tasks.map((t) => {
      return (
        <TaskItem key={t._id} task={t} setSelectedTasks={SelectedTaskValue} />
      );
    })}
  </div>