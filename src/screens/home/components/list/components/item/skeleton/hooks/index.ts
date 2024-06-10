const usePokeItemSkeleton = () => {
  const headerStyle = [
    { width: 50, height: 20, marginBottom: 6, borderRadius: 5 },
    { width: 180, height: 28, marginBottom: 6, borderRadius: 5 }
  ];
  const statsStyle = {
    layout: [
      {
        width: 70,
        height: 28,
        marginBottom: 6,
        borderRadius: 5,
        marginRight: 10
      },
      { width: 70, height: 28, borderRadius: 5, marginRight: 10 }
    ],
    containerStyle: { flex: 0 }
  };
  const typesStyle = {
    layout: [
      { width: 70, height: 28, marginBottom: 6, borderRadius: 5 },
      { width: 70, height: 28, borderRadius: 5 }
    ],
    containerStyle: { flex: 0 }
  };
  const imageStyles = [
    { width: 100, height: 100, borderRadius: 100, marginLeft: "auto" }
  ];

  return {
    headerStyle,
    statsStyle,
    typesStyle,
    imageStyles
  };
};

export default usePokeItemSkeleton;
