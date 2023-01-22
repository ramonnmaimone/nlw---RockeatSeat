const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '01-03', '01-04', '01-05',, '01-06',, '01-07',, '01-08',, '01-09',],
    takePills: ['01-02']
}

nlwSetup.setData(data)
nlwSetup.load()