export function initializeCall({ options, assignmentInfo }, searchQuery) {
  return new window.LIB(options)
    .setAssignmentInfo(assignmentInfo)
    .setUserInfo({
      id: searchQuery.id || `${assignmentInfo.account}-caller`,
      firstName: searchQuery.firstName || 'Unknown',
      lastName: searchQuery.lastName || 'Caller'
    });
}