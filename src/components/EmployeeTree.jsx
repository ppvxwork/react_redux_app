import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';

class EmployeeTree extends Component {
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  renderTemplate = () => {
    const { employees, positions, checkedEmployees } = this.props;

    const mainPositions = positions.filter(position => !position.category_id);
    return (
      <Tree
        checkable
        defaultExpandedKeys={checkedEmployees}
        defaultCheckedKeys={checkedEmployees}
        onCheck={this.onCheck}
      >
        {this.renderTreeNodes(mainPositions, positions, employees)}
      </Tree>
    );
  };

  renderTreeNodes = (mainPositions, positions, employees) => {
    const treeNodes = mainPositions.map(mainPosition => (
        <Tree.TreeNode title={mainPosition.name} key={mainPosition.id} selectable={false} >
          {positions.filter(position => position.category_id === mainPosition.id).map(position => (
              <Tree.TreeNode title={position.name} key={position.id} selectable={false} >
                {employees.filter(employee => employee.category_id === position.id)
                  .map(employee => <Tree.TreeNode title={employee.name} key={employee.name} selectable={false}/>)}
              </Tree.TreeNode>
          ))}
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
  checkedEmployees: PropTypes.array,
};

export default EmployeeTree;
