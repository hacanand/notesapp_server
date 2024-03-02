const Group = require("../models/groupdata");

class GroupRepository {
  // async getGroupByName(name) {
  //   try {
  //     const group = await Group.findOne({ name }).populate("notes");
  //     console.log(group)
  //     return group;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async createGroup(group) {
    try {
      const createdGroup = await Group.create(group);
      return createdGroup;
    } catch (error) {
      throw error;
    }
  }
  async getAllGroups() {
    try {
      const groups = await Group.find();
      return groups;
    } catch (error) {
      throw error;
    }
  }
  async getGroupsWithAllNotes(id) {
    try {
      console.log(id)
      const groups = await Group.findById(id).populate('notes');
      return groups;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GroupRepository;
