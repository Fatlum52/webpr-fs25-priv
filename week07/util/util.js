// todo: implement the times function

Number.prototype.times = function (cb) {
    return Array.from({length:this}, (_, index) => cb(index));
};

Number.prototype.times = function(cb) {
    return Array.from({length:this}, (_,idx) => cb(idx));
};
