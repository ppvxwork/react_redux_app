import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';
import { getKey } from '../utils';

class EmployeeTree extends Component {

  renderTemplate = () => {
    const {
      employees, positions, checkedEmployeeIds, checkedEmployeeIdsAction,
    } = this.props;

    const mainPositions = positions.filter(position => !position.category_id);
    return (
      <Tree
        checkable
        defaultExpandAll
        defaultCheckedKeys={checkedEmployeeIds}
        onCheck={checkedEmployeeIdsAction}
      >
        {this.renderTreeNodes(mainPositions, positions, employees)}
      </Tree>
    );
  };

  renderTreeNodes = (mainPositions, positions, employees) => {
    const treeNodes = mainPositions.map(mainPosition => (
        <Tree.TreeNode title={mainPosition.name} key={getKey(mainPosition.id, 'position-')} selectable={false} >
          {
            positions
              .filter(position => position.category_id === mainPosition.id)
              .map(position => (
                <Tree.TreeNode title={position.name} key={getKey(position.id, 'position-')} selectable={false} >
                  {
                    employees.filter(employee => employee.category_id === position.id)
                      .map(employee => <Tree.TreeNode title={employee.name} key={getKey(employee.id, 'employee-')} selectable={false}/>)
                  }
                </Tree.TreeNode>
              ))
          }
        </Tree.TreeNode>
    ));

    return treeNodes;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTemplate()}
      </React.Fragment>
    );
  }
}

EmployeeTree.propTypes = {
  employees: PropTypes.array.isRequired,
  positions: PropTypes.array.isRequired,
  checkedEmployeeIds: PropTypes.array.isRequired,
  checkedEmployeeIdsAction: PropTypes.func.isRequired,
};

export default EmployeeTree;
