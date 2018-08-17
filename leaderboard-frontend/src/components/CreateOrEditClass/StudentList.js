import React, {Component} from 'react';
import {connect} from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            modal: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    delete = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Update Student</DropdownItem>
                        {/*<DropdownItem disabled>Action</DropdownItem>*/}
                        <DropdownItem color="danger" onClick={this.delete} >Remove Student</DropdownItem>

                        <DropdownItem divider />
                        <DropdownItem>Student Hired</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Modal isOpen={this.state.modal} toggle={this.delete} className={this.props.className}>
                    <ModalHeader toggle={this.delete} charCode="Y">Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.delete}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.delete}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {

    }
}

export default StudentList