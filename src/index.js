module.exports = function towelSort(matrix) {

    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    let arr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i] = matrix[i].sort((a, b) => a - b)
            arr = arr.concat(matrix[i])
        } else {
            matrix[i] = matrix[i].sort((a, b) => b - a)
            arr = arr.concat(matrix[i])
        }
    }

    return arr
}

