export default selectedLibraryId=(libraryId) => {
    return {
      type : 'select_library',
      payload : libraryId
    };
}