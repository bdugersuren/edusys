<div>
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