export default function Widget() {
    return (
        <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">Upload your Excel/CSV File</h1>
        
          <div className="bg-card w-full max-w-md p-6 rounded-lg shadow-lg border border-primary">
            <form className="space-y-4">
              <label htmlFor="file-upload" className="block text-sm font-medium leading-5 text-primary">Choose a file to upload</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-primary rounded-md hover:border-primary-foreground transition">
                <div className="text-center">
                  <img src="https://openui.fly.dev/openui/100x100.svg?text=📁" alt="file-upload" className="h-12 mx-auto mb-4" />
                  <p className="text-sm text-primary">Drag and drop your file here</p>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  <label htmlFor="file-upload" className="font-medium text-primary hover:text-primary-foreground cursor-pointer">or browse</label>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-2 rounded-md transition">Upload File</button>
            </form>
          </div>
        
          <div className="bg-card mt-8 p-6 rounded-lg shadow-lg w-full max-w-md border border-primary">
            <h2 className="text-xl font-bold mb-4 text-primary">Summary Report</h2>
            <table className="w-full">
              <thead>
          </div>
        </div>
              <tr className="bg-primary text-primary-foreground">
                  <th className="py-2 px-4">Cust State</th>
                  <th className="py-2 px-4">Cust pin</th>
                  <th className="py-2 px-4">DPD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-primary">
                  <td className="py-2 px-4">ARUNACHAL PRADESH</td>
                  <td className="py-2 px-4">791121</td>
                  <td className="py-2 px-4">2</td>
                </tr>
                <tr className="border-t border-primary">
                  <td className="py-2 px-4">ARUNACHAL PRADESH</td>
                  <td className="py-2 px-4">791112</td>
                  <td className="py-2 px-4">2</td>
                </tr>
                <tr className="border-t border-primary">
                  <td className="py-2 px-4">JHARKHAND</td>
                  <td className="py-2 px-4">816101</td>
                  <td className="py-2 px-4">3</td>
                </tr>
                <tr className="border-t border-primary">
                  <td className="py-2 px-4">JHARKHAND</td>
                  <td className="py-2 px-4">816108</td>
                  <td className="py-2 px-4">8</td>
                </tr>
              </tbody>
    )
}