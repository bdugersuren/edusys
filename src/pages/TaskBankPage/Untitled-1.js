<div className="taskbank">
      <div className="flex">
        <label>Хичээл </label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Хичээл сонгох"
          //optionFilterProp="children"
          onChange={OnChangeSubject}
          //onFocus={onFocus}
          //onBlur={onBlur}
          //onSearch={onSearch}
        >
          {subjectTableData.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>

        <label>Анги</label>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Хичээл сонгох"
          onChange={OnChangeClass}
        >
          {classTableData.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <label className="border-2 ">
          Нийт даалгавар {filteredTasks.length}
        </label>
        <label>Сонгогдсон даалгавар {selectedTasks.length} </label>

        <button>Даалгавар үүсгэх</button>
        <button>Тест үүсгэх</button>
        <button>Засах</button>
        <button>Хувилах</button>
      </div>
      <div className="flex flex-row">
        <div className="flex-5">
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={topicNodes}
          />
        </div>
        <div className="flex-auto">
          <TasksComp
            tasks={filteredTasks}
            setSelectedTasks={setSelectedTasks}
          />
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            defaultPageSize={2}
            total={filteredTasks.length}
            onChange={onChange}
          />
        </div>
        <div className="flex-2">
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit /> <GrTask />
        </div>
      </div>
    </div>